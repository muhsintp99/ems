const style = (theme) => ({
  LoginmainBox: {
    "&.MuiBox-root": {
      height: "100vh",
      background: `linear-gradient(to bottom, ${theme.palette.indexpage.loginCrl} 50%, ${theme.palette.indexpage.loginCrlnew} 50%)`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  LoginSubbox: {
    "&.MuiBox-root": {
      borderRadius: "8px",
      border: `1px solid ${theme.palette.indexpage.uploadborder}`,
      backgroundColor: theme.palette.indexpage.loginCrlnew,
      padding: "25px",
      width: {
        lg: "30%",
      },
    },
  },
  LoginAccountBox: {
    "&.MuiBox-root": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  LogoImage: {
    height: "65px",
  },
  LoginBox: {
    "&.MuiBox-root": {
      marginTop: "20px",
    },
  },
  LoginTxt: {
    "&.MuiTypography-root": {
      color: theme.palette.indexpage.dragspan,
      fontSize: "18px",
      fontWeight: 600,
    },
  },
  LoginSubtxt: {
    "&.MuiTypography-root": {
      color: theme.palette.indexpage.loginSubtxt,
      fontSize: "12px",
      fontWeight: 500,
      marginTop: "7px",
    },
  },
  errorTypo: {
    "&.MuiTypography-root": {
      fontSize: "12px",
      color: theme.palette.indexpage.cancelbtnPhoto,
    },
  },
  PasswrdBox:{
    "&.MuiBox-root": {
        marginTop: "25px" 
    }
  },
  clearButtonBox:{
    "&.MuiBox-root": {
        display: "flex",
        justifyContent: "flex-end",
        gap: "10px",
        marginTop: "20px",
    }
  }
});

export default style;
