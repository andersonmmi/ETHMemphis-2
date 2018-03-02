pragma solidity ^0.4.18;

/*
 *  EthMemphis Application Form
 */

contract ApplicationForm {

    /*
     *  STORAGE
     */

    struct Application {
        bytes32 firstName;
        bytes32 lastName;
        bytes32 email;
        bytes32 gitHubUrl;
        bytes32 linkedInUrl;
        bytes32 interest;
        bool shareRoom;
    }

    Application[] applications;

    address[] organizers;

    /*
     *  EVENTS
     */

    event Apply(address _applicant);

    /*
     *  CONSTRUCTOR
     */

    function ApplicationForm() public {

        // initialize applications array
        apply(
            "Brian",
            "W",
            "doNotContact@me.io",
            "gitMe",
            "something",
            "loveMemphis!",
            true);

        // add first organzier
        organizers.push(msg.sender);
    }

    /*
     *  MODIFIER
     */

    modifier onlyOrganizer() {

        bool isOrganizer = false;

        for (uint i=0; i<organizers.length; i++) {
            if (msg.sender == organizers[i]) {
                isOrganizer = true;
            }
        }

        require(isOrganizer);
        _;
    }

    /*
     *  SET FUNCTION
     */

    function addOrganzier(address _newOrganizer) onlyOrganizer external {
        organizers.push(_newOrganizer);
    }

    function apply(
        bytes32 _firstName,
        bytes32 _lastName,
        bytes32 _email,
        bytes32 _gitHubUrl,
        bytes32 _linkedInUrl,
        bytes32 _interest,
        bool _shareRoom
    )

    public
    {

    Application memory _app = Application({

    firstName: _firstName,
    lastName: _lastName,
    email: _email,
    gitHubUrl: _gitHubUrl,
    linkedInUrl: _linkedInUrl,
    interest: _interest,
    shareRoom: _shareRoom
    });

    applications.push(_app);
    Apply(msg.sender);
    }

    /*
     *  GET FUNCTIONS
     */

    function getApplicants()

    external
    onlyOrganizer
    view
    returns
    (
    bytes32[],
    bytes32[],
    bytes32[],
    bytes32[],
    bool[]
    ) {
        uint256 length = getTotalApplications();

        bytes32[] memory emails = new bytes32[](length);
        bytes32[] memory gits = new bytes32[](length);
        bytes32[] memory lins = new bytes32[](length);
        bytes32[] memory interests = new bytes32[](length);
        bool[] memory shares = new bool[](length);

        for (uint i=0; i<length; i++) {
            Application memory _applicant = applications[i];

            emails[i] = _applicant.email;
            gits[i] = _applicant.gitHubUrl;
            lins[i] = _applicant.linkedInUrl;
            interests[i] = _applicant.interest;
            shares[i] = _applicant.shareRoom;
        }

        return (emails,gits,lins,interests,shares);
    }

    function getApplicant(uint256 _n)

    external
    onlyOrganizer
    view
    returns
    (
    bytes32 _firstName,
    bytes32 _lastName,
    bytes32 _email,
    bytes32 _gitHubUrl,
    bytes32 _linkedInUrl,
    bytes32 _interest,
    bool _shareRoom
    ){
        require(_n < applications.length);

        Application storage _applicant = applications[_n];

        _firstName = _applicant.firstName;
        _lastName = _applicant.lastName;
        _email = _applicant.email;
        _gitHubUrl = _applicant.gitHubUrl;
        _linkedInUrl = _applicant.linkedInUrl;
        _interest = _applicant.interest;
        _shareRoom = _applicant.shareRoom;
    }

    function getTotalApplications() public view returns (uint256) {
       return applications.length - 1;
    }
}
