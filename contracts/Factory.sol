pragma solidity ^0.5.16;

import "./GovernorAlpha.sol";
import "./Timelock.sol";
import "./VoteToken.sol";

interface VoteTokenDeployerInterface {
    function getPriorVotes(address account, uint256 blockNumber)
        external
        view
        returns (uint96);
}

contract GovernanceDeployer {
    TimelockDeployer public timelockDeployer;
    VoteTokenDeployer public voteTokenDeployer;
    GovernorDeployer public governorDeployer;


    bool initialized = false;

    event governanceContractCreated(address contractAddress);
    event governorDeployerCreated(address timelockDeployer, address voteTokenDeployer, address governorDeployer);

    constructor() public {
        timelockDeployer = new TimelockDeployer();
        voteTokenDeployer = new VoteTokenDeployer();
        governorDeployer = new GovernorDeployer();
        emit governorDeployerCreated(address(timelockDeployer), address(voteTokenDeployer), address(governorDeployer));
    }

    function createGovernance(
        address _guardian,
        string memory _governorName,
        uint256 _delay,
        uint256 _gracePeriod,
        uint256 _minDelay,
        uint256 _maxDelay,
        string memory _voteTokenName,
        string memory _voteTokenSymbol
    ) public returns (GovernorAlpha _governanceContract) {
        Timelock _timelock = timelockDeployer.createTimelock(
            _guardian,
            _delay,
            _gracePeriod,
            _minDelay,
            _maxDelay
        );
        VoteToken _voteToken = voteTokenDeployer.createStandardVoteToken(
            _guardian,
            _voteTokenName,
            _voteTokenSymbol
        );
        GovernorAlpha _newGovernor = governorDeployer.createGovernanceContract(
            address(_timelock),
            address(_voteToken),
            _guardian,
            _governorName
        );

        emit governanceContractCreated(address(_newGovernor));
        return _newGovernor;
    }
}

contract GovernorDeployer {
    event governanceContractCreated(address governanceContractAddress);

    function createGovernanceContract(
        address _timelock,
        address _voteToken,
        address _guardian,
        string memory _governorName
    ) public returns (GovernorAlpha _governorAlpha) {
        GovernorAlpha _newGovernor = new GovernorAlpha(
            _timelock,
            _voteToken,
            _guardian,
            _governorName
        );
        emit governanceContractCreated(address(_newGovernor));
        return _newGovernor;
    }
}

contract TimelockDeployer {
    event timelockCreated(address timelockAddress);

    function createTimelock(
        address _admin,
        uint256 _delay,
        uint256 _gracePeriod,
        uint256 _minDelay,
        uint256 _maxDelay
    ) public returns (Timelock timelock) {
        Timelock _timelock = new Timelock(
            _admin,
            _delay,
            _gracePeriod,
            _minDelay,
            _maxDelay
        );
        emit timelockCreated(address(_timelock));
        return _timelock;
    }
}

contract VoteTokenDeployer {
    event voteTokenCreated(address voteTokenAddress);

    function createStandardVoteToken(
        address account,
        string memory _name,
        string memory _symbol
    ) public returns (VoteToken _voteToken) {
        return _createVoteToken(account, _name, _symbol, 18, 10000000e18);
    }

    function createCustomVoteToken(
        address account,
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 _totalSupply
    ) public returns (VoteToken _voteToken) {
        return
            _createVoteToken(account, _name, _symbol, _decimals, _totalSupply);
    }

    function _createVoteToken(
        address account,
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 _totalSupply
    ) internal returns (VoteToken _voteTokenAddress) {
        VoteToken _voteToken = new VoteToken(
            account,
            _name,
            _symbol,
            _decimals,
            _totalSupply
        );
        emit voteTokenCreated(address(_voteToken));
        return _voteToken;
    }
}
