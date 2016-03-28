import React      from 'react';
import API        from '../services/api';
import Club       from './club';

class Clubs extends React.Component {
    constructor(props) {
        super(props);
        API.getClubs((clubs) => {
            this.setState({
                clubs: clubs,
                filteredClubs: clubs
            });
        });
        this.state = {
            clubs: [],
            filteredClubs: []
        };
    }

    render() {
        return(
            <main className="clubs">
                <div className="container">
                    <input placeholder="Filter by club name" type="text" onChange={this.filterHandler()} />
                    {this.state.filteredClubs.map(function(club, index) {
                        return <Club key={index} club={club} />;
                    })}
                </div>
            </main>
        );
    }

    filterHandler() {
        return (event) => {
            let text =  event.target.value;
            let newFilteredClubs = text == "" || text == null ? this.state.clubs : this.state.clubs.filter(function(club) {
                if (club.name.toLowerCase().includes(text)) {
                    return true;
                }
                return false;
            });
            this.setState({
                filteredClubs: newFilteredClubs
            })
        };
    }
}

export default Clubs;
