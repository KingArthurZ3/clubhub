import Blockspring from './blockspring';
import jQuery      from 'jQuery';

export default {
    getClubs: (callback) => {
        Blockspring.runParsed("query-public-google-spreadsheet", {
                "query": "SELECT *",
                "url": "https://docs.google.com/spreadsheets/d/1LdoK6CKz2OHWyBB5JUlYxxeYy4BSKpW7-w4crSODpx4/edit#gid=786410895"
            }, {
                "api_key": "br_28029_d069ee1984a468c879dc72cf038c089798b5ba4d"
            }, function (res) {
                var array = jQuery.map(res.params, function (value, index) {
                    return [value];
                });
                var rows = [];
                for (var i = 0; i < array[0].length; i++) {
                    var test = jQuery.map(array[0][i], function (value, index) {
                        return [value];
                    });
                    rows.push(test.slice(0, -1));
                }
                var clubs = rows.map(function (club) {
                    var club = {
                        name: club[0],
                        advisor: club[1],
                        room: club[2],
                        time: club[3],
                        purpose: club[7],
                        president: club[4],
                        email: club[5]
                    };
                    return club;
                });
                callback(clubs);
            }
        );
    }
}
