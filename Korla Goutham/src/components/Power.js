import React from 'react'
import Power from '@material-ui/icons/PowerSettingsNew'
import  {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'
const Powers = () => {
  return (

      <Link to="/">
        <Button
          style={{
            position: "fixed",
            left: "50%",
            zIndex: "2",
            transform: "translate(-50%,0)",
          }}
        >
          <Power />
        </Button>
      </Link>

  );
}

export default Powers
