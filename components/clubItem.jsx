import React      from 'react';
import API        from '../services/api';

class ClubItem extends React.Component {
    render() {
        return(
            <div className="club">
                <div className="title">
                    {this.props.club.name}
                </div>
                <div className="group">
                    <div className="field-label">Advisor</div>
                    <div className="field">
                        {this.props.club.advisor}
                    </div>
                </div>
                <div className="group">
                    <div className="field-label">Room</div>
                    <div className="field">
                        {this.props.club.room}
                    </div>
                </div>
                <div className="group">
                    <div className="field-label">Time</div>
                    <div className="field">
                        {this.props.club.time}
                    </div>
                </div>
                <div className="group">
                    <div className="field-label">Purpose</div>
                    <div className="field">
                        {this.props.club.purpose}
                    </div>
                </div>
                <div className="group">
                    <div className="field-label">President</div>
                    <div className="field">
                        {this.props.club.president}
                    </div>
                </div>
                <div className="group">
                    <div className="field-label">Email</div>
                    <div className="field">
                        <a href={`mailto:${this.props.club.email}`}>
                            {this.props.club.email}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClubItem;
