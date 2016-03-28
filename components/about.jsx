import React      from 'react';

class About extends React.Component {
    render() {
        return (
            <main className="about">
                <div className="container">
                    <div className="block">
                        <img src="img/icon.jpg" />
                    </div>
                    <div className="block">
                        <div className="title">
                            <h2>
                                What do we do?
                            </h2>
                        </div>
                        <p>
                            We help you find the perfect club out of over 72 active clubs on campus.
                        </p>
                    </div>
                    <div className="block">
                        <div className="title">
                            <h2>
                                How does it work?
                            </h2>
                        </div>
                        <p>
                            Find all of the events, club meeting dates, and useful information in just a click of a
                            button.
                        </p>
                    </div>
                </div>
            </main>
        );
    }
}

export default About;
