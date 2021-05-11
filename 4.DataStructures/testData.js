// test data
// let journal = []
var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false}
 ]


// create an array of unique events on the journal
function journalEvents(journal) {
	let events = [];
	for (let entry of journal) {
		for (let event of entry.events) {
		  if (!events.includes(event)) {
		    events.push(event);
		  }
		}
	}
	return events;
}

for (let event of journalEvents(JOURNAL)) {
    console.log(event);
}