import React      from 'react';

class Welcome extends React.Component {
    render() {
        return(
            <main className="welcome">
                <div className="container">
                    <div className="contents">
                        <div className="title">
                            Clubs are hard, here's some help
                        </div>
                        <div className="body">
                            We're just your friendly neighborhood club advisors
                            <br/>
                            Find your dream clubs today!
                        </div>
                        <a href="clubs">
                            <button className="button">
                                Start searching now
                            </button>
                        </a>
                    </div>
                </div>
            </main>
        );
    }
}

export default Welcome;
