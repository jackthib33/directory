
const styles = ({ breakpoints, palette, spacing, transitions }) => {
    const { common, primary } = palette;
    return {
        breakpoints: {
            values: {
              xs: 0,
              sm: 600,
              md: 800,
              lg: 1280,
              xl: 1920,
            },
          },
        root: {
            display: 'flex',
            justifyContent:'center',
            flexFlow: 'row wrap',
        },
         trainerBoxTwo: {
            textAlign:'center',
            border: 'none',
            borderRadius: '1rem',
            maxWidth: '300px',
            margin: '1rem',
            padding: '1rem',
            display: 'inline-block',
            boxShadow: '5px 10px 20px #888888',
               
        },
        ProviderBox:{
            textAlign:'center',
            border: 'none',
            borderRadius: '1rem',
            maxWidth: '300px',
            margin: '1rem',
            padding: '1rem',
            display: 'inline-block',
            boxShadow: '5px 10px 20px #888888',

        },

        inline: {
            display: 'inline-flex',
            [breakpoints.down('sm')]: { 
                display: 'inline',
             },
         },
       
        trainerInfo: {
            paddingLeft: '20px',
            paddingRight: '10px',
            marginTop: '0px',
            [breakpoints.down('sm')]: { 
                textAlign: 'center',
                paddingLeft: '20px',
                paddingRight: '20px',
                marginTop: '1rem',
             },
            
        },
        providerlogo: {
            maxWidth: '80%',
        },
        trainerPic: {
            
            float: 'center',
            maxWidth:'150px',
            borderRadius:'100px',
            margin: '10px',
            [breakpoints.down('sm')]: {
                float: 'none',
            },
        },
        badgeBox: {
            float: 'left',
            alignSelf: 'flex-end',
            marginBottom: '10px',
            [breakpoints.down('sm')]: {
                float: 'none',
                marginTop: '0px',
             },
        },
        badges:{
            maxWidth: '75px',
        },
        mySite: {
            backgroundColor: '#cc0000',
            color: 'white',
            border: 'none',
            float: 'center',
            marginTop: '0px',
            [breakpoints.down('sm')]: {
               float: 'none',
               marginTop: '0px',
            },
           

        },
        mySiteProvider: {
            backgroundColor: '#cc0000',
            color: 'white',
            border: 'none',
        },
        title: {
            fontSize: '1rem',
        },
        providerLogo: {
            maxWidth: '80%',

        },
    };
};
export default styles;