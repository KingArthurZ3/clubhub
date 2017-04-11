import jQuery      from 'jquery';

// JSON feed of the spreadsheet.
const sheetsUrl =
    "https://spreadsheets.google.com/feeds/list/12lZPb-BKuDsEVWirwm8puMrvmACoaNYJyS5A_vjnVak/od6/public/values?alt=json";

// console.log row to figure out the keys of these columns.
// then do row[<keyname>]["$t"] to access their string values.
const nameKey = "gsx$clubname";
const advisorKey = "gsx$advisorname";
const roomKey = "gsx$wheredoesyourclubmeet";
const timeKey = "gsx$whendoesyourclubmeet";
const purposeKey = "gsx$descriptionofclub";
const presidentKey = "gsx$nameofclubpresidents";
const emailKey = "gsx$contactemailoftheclub";

export default {
    getClubs: (callback) => {
        jQuery.getJSON(sheetsUrl, data => {
            var clubs = data.feed.entry.map(row => {
                return {
                    name: row[nameKey]["$t"],
                    advisor: row[advisorKey]["$t"],
                    room: row[roomKey]["$t"],
                    time: row[timeKey]["$t"],
                    purpose: row[purposeKey]["$t"],
                    president: row[presidentKey]["$t"],
                    email: row[emailKey]["$t"]
                };
            });
            callback(clubs);
        });
    }
}
