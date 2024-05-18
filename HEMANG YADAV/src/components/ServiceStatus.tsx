import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ServiceStatus: React.FC = () => {
  const [status, setStatus] = useState("");
  const apiServiceStatusURL = import.meta.env.VITE_API_SERVICESTATUS_URL || "";

  const statusColor = () => {
    if (status === "operational") {
      return "!text-green-500";
    } else if (status === "downtime") {
      return "!text-yellow-500";
    } else if (status === "degraded") {
      return "!text-red-500";
    }
  };
  const iconColor = () => {
    if (status === "operational") {
      return "bg-green-500";
    } else if (status === "downtime") {
      return "bg-yellow-500";
    } else if (status === "degraded") {
      return "bg-red-500";
    }
  };

  useEffect(() => {
    async function getStatusData() {
      try {
        const response = await axios.get(apiServiceStatusURL);
        setStatus(response.data.heartbeatResponse.serviceStatus);
      } catch (error) {
        console.error("Failed to get status from backend:", error);
      }
    }

    getStatusData();
  }, []);
  return (
    <React.Fragment>
      <Link to="https://status.alpaycelik.dev">
        <div className="status p-4 rounded-xl flex flex-row items-center">
          <div className="status-icon w-[2rem] h-[2rem] rounded-3xl relative mr-4">
            <div
              className={`status-icon-inner absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 ${iconColor()} rounded-[inherit]`}
            ></div>
            <div
              className={`status-icon-wave  w-[inherit] h-[inherit] rounded-[inherit] ${iconColor()}   animate-ping `}
            ></div>
          </div>
          <p className={`status-text ${statusColor()} `}>Status: {status}</p>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default ServiceStatus;
