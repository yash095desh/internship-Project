"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Children from "./Children";

function Component2() {
  const [services, setServices] = useState({
    customerSuccess: false,
    support: false,
  });
  const [design, setDesign] = useState({
    graphicDesign: false,
    productDesign: false,
    webDesign: false,
  });

  const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "customer-services") {
      setServices({
        customerSuccess: event.target.checked,
        support: event.target.checked,
      });
    } else {
      setDesign({
        graphicDesign: event.target.checked,
        productDesign: event.target.checked,
        webDesign: event.target.checked,
      });
    }
  };

  const handleServicesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setServices((prev) => ({
      ...prev,
      [event.target.id]: event.target.checked,
    }));
  };

  const handleDesignChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDesign((prev) => ({ ...prev, [event.target.id]: event.target.checked }));
  };

  return (
    <div className=" max-w-sm  bg-white rounded-lg shadow-md h-[80vh] p-4">
      {/* // Customer-Services */}
      <FormControlLabel
        label="Costumer-Services"
        control={
          <Checkbox
            checked={services.customerSuccess && services.support}
            indeterminate={services.customerSuccess !== services.support}
            id="customer-services"
            onChange={handleParentChange}
          />
        }
      />
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        <Children
          name="Support"
          id="support"
          handleParentChange={handleServicesChange}
          value={services.support}
        />
        <Children
          name="Customer success"
          id="customerSuccess"
          handleParentChange={handleServicesChange}
          value={services.customerSuccess}
        />
      </Box>
      {/* Design  */}
      <FormControlLabel
        label="Design"
        control={
          <Checkbox
            checked={
              design.graphicDesign && design.productDesign && design.webDesign
            }
            indeterminate={
              !(
                design.graphicDesign === design.productDesign &&
                design.productDesign === design.webDesign
              )
            }
            onChange={handleParentChange}
          />
        }
      />
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        <Children
          name="graphic Design"
          id="graphicDesign"
          handleParentChange={handleDesignChange}
          value={design.graphicDesign}
        />
        <Children
          name="product Design"
          id="productDesign"
          handleParentChange={handleDesignChange}
          value={design.productDesign}
        />
        <Children
          name="web Design"
          id="webDesign"
          handleParentChange={handleDesignChange}
          value={design.webDesign}
        />
      </Box>
    </div>
  );
}

export default Component2;
