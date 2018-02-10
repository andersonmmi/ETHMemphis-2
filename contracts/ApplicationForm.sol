pragma solidity ^0.4.18;

/*
 *  EthMemphis Application Form
 */

contract ApplicationForm {

    /*
     *  STORAGE
     */

    struct Application {
        string firstName;
        string lastName;
        string email;
        string gitHubUrl;
        string linkedInUrl;
        string interest;
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
        apply(
            "Brian",
            "W",
            "doNotContact@me.io",
            "gitMe",
            "something",
            "loveMemphis!");

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
        string _firstName,
        string _lastName,
        string _email,
        string _gitHubUrl,
        string _linkedInUrl,
        string _interest
    )

    public
    {

    Application memory _app = Application({

    firstName: _firstName,
    lastName: _lastName,
    email: _email,
    gitHubUrl: _gitHubUrl,
    linkedInUrl: _linkedInUrl,
    interest: _interest
    });

    applications.push(_app);
    Apply(msg.sender);
    }

    /*
     *  GET FUNCTIONS
     */

    function getApplicant(uint256 _n)

    external
    onlyOrganizer
    view
    returns
    (
    string _firstName,
    string _lastName,
    string _email,
    string _gitHubUrl,
    string _linkedInUrl,
    string _interest
    ){
        require(_n < applications.length);

        Application storage _applicant = applications[_n];

        _firstName = _applicant.firstName;
        _lastName = _applicant.lastName;
        _email = _applicant.email;
        _gitHubUrl = _applicant.gitHubUrl;
        _linkedInUrl = _applicant.linkedInUrl;
        _interest = _applicant.interest;
    }

    function getTotalApplications() external view returns (uint256) {
       return applications.length - 1;
    }
}
