import { useState } from "react";

const FlightsTabs = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="tab-box">

      <div className="tab-btns d-flex justify-content-between align-items-center gap-5 mb-4">
        <button
          className={activeTab === "upcoming" ? "active" : ""}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming Flights
        </button>

        <button
          className={activeTab === "past" ? "active" : ""}
          onClick={() => setActiveTab("past")}
        >
          Past Flights
        </button>
      </div>

      <div className="tab-content">

        {activeTab === "upcoming" && (
          <div className="flight-desc d-flex justify-content-between">

            <div className="from">
              <div className="mb-4">
                <h5>Hanoi</h5>
                <h6>Vietnam</h6>
              </div>
              <div className="mb-0">
                <h5>Hanoi</h5>
                <h6>Vietnam</h6>
              </div>
            </div>

            <div className="plan-img text-center">
              <img
                src="/src/assets/images/flight-trip-icon.png"
                alt="Trip"
              />
              <p className="mb-0">23:00 hours</p>
            </div>

            <div className="to">
              <div className="mb-4">
                <h5>Danang</h5>
                <h6>Vietnam</h6>
              </div>
              <div className="mb-0">
                <h5>Danang</h5>
                <h6>Vietnam</h6>
              </div>
            </div>

          </div>
        )}

        {activeTab === "past" && (
          <div className="flight-desc text-center">
            <p className="mb-0">No past flights available.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default FlightsTabs;
