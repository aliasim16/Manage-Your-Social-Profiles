import "../components/css/Engagement.css"

function Engagement(props) {
  return (
    <>
    <div className="container engagement_container" >
        <div className="row">
            <div className="row first_row">
                <div className="col-sm">
                    <h1>WE generated 3x more engagement in 2022</h1>
                </div>
                <div className="col-sm engagement_card_parent engagement_card_parent_1 ">
                        <div className="engagement_card card_1 ">
                            <div className="left_side">
                                <h1>1 Billion</h1>
                                <p>
                                    Views in 2021
                                </p>
                            </div>
                            <div className="right_side">
                                <div className="eye">
                                    <img src="Images\Engagement\eye.png" alt="eye.png" />
                                </div>
                            </div>
                        </div>
                        <div className="engagement_card card_2">
                            <div className="left_side">
                                <div>
                                <h1>128</h1>
                                </div>
                                <div>
                                <p>Projects Done</p>
                                </div>
                            </div>
                            <div className="right_side">
                                <div className="project">
                                    <img src="Images\Engagement\clipboard-tick.png" alt="clipboard-tick.png" />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="row second_row">
                <div className="col-sm">
                    <p>
                    Driven by our passion for the industry, and our team’s,
                    Arabia Talents have created some of the most engaging influencer campaigns in gaming,
                    sports, technology and more.
                    </p>
                </div>
                <div className="col-sm engagement_card_parent ">
                        <div className="engagement_card card_3">
                            <div className="left_side">
                                <h1>50</h1>
                                <p>Long Term Details</p>
                            </div>
                            <div className="right_side">
                                <div className="briefcase">
                                    <img src="Images\Engagement\briefcase.png" alt="briefcase.png" />
                                </div>
                            </div>
                        </div>
                        <div className="engagement_card card_4">
                            <div className="left_side">
                                <h1>+33</h1>
                                <p>Clients Onboard</p>
                            </div>
                            <div className="right_side">
                                <div className="people">
                                    <img src="Images\Engagement\people.png" alt="people.png" />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
export default Engagement