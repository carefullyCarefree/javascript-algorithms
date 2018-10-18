function confirmEnding(str, target) {

// substring lets you enter arguments in the paranthesis to determine the index you start at, and how far you go.
// in this substr we are using a negative to start at the end of the string.
// We back up the length of the target of comparison and then com[pare it to the target to see if it matches
return str.substr(-target.length) === target;

}

confirmEnding("He has to give me a new name", "name");
