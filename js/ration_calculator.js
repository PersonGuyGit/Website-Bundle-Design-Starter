var ResultingDaysOfSupply, ResultingCansNeeded, InputDays, InputCans, CanValueOfACase, InputCases, InputDailyCanIntake;
ResultingDaysOfSupply = 0; InputDays = 0; InputCans = 0; CaseOfSoda = 0; InputCases = 0; ResultingCansNeeded,
    InputDailyCanIntake = 0;

var bSearchingForDays = false;
var bSearchingForAmmountNeeded = false;

CanValueOfACase = 24;


function SearchingForDays(bSearchingForDays, InputCans, InputDailyCanIntake, InputCases, CanValueOfACase, ResultingDaysOfSupply) {
    /* How many days will my current coke reserves last */

    if (bSearchingForDays == true) {
        if (InputCans > 0 && InputDailyCanIntake > 0) {

            ResultingDaysOfSupply = InputCans / InputDailyCanIntake;

            if (InputCases > 0) {
                ResultingDaysOfSupply + (InputCases * CanValueOfACase);
            }

        }
        else
            window.alert("Error: Must provide positive values for day and can values.");
    }
    return ResultingDaysOfSupply;
}

/* How many cans will I need to last for InputDays */
function SearchingForCans(bSearchingForAmmountNeeded, InputDays, InputDailyCanIntake, ResultingCansNeeded) {
    if (bSearchingForAmmountNeeded == true) {
        if (InputDays > 0 && InputDailyCanIntake > 0) {
            ResultingCansNeeded = InputDays * InputDailyCanIntake;
        }
        else
            window.alert("Error: Must provide positive values for day and can values.");
    }
    return ResultingCansNeeded;
}

