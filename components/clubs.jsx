import React        from 'react';
import Spinner      from 'react-spinner';
import API          from '../services/api';
import ClubItem     from './clubItem';

class Clubs extends React.Component {
    constructor(props) {
        super(props);
        API.getClubs((clubs) => {
            this.setState({
                clubs: clubs,
                filteredClubs: clubs,
                loading: false
            });
        });
        this.state = {
            clubs: [],
            filteredClubs: [],
            loading: true
        };
    }

    render() {
        return (
            <main className="clubs">
                <div className="container">
                    <input placeholder="Filter by club name" type="text" onChange={this.filterHandler()} />
                    {this.state.loading ? this.renderLoading() : this.renderClubs()}
                </div>
            </main>
        );
    }

    renderClubs() {
        return this.state.filteredClubs.map(function(club, index) {
            return <ClubItem key={index} club={club} />;
        });
    }

    renderLoading() {
        return (
            <div className="loading">
                <Spinner />
            </div>
        );
    }

    filterHandler() {
        return (event) => {
            let text =  event.target.value;
            let newFilteredClubs = text == "" || text == null ? this.state.clubs : this.state.clubs.filter(function(club) {
                if (club.name.toLowerCase().includes(text.toLowerCase())) {
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
