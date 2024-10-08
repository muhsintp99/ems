import PropTypes from 'prop-types';

// Material-UI
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// Project imports
import Chip from 'ui-component/extended/Chip';

// Assets
import { IconBuildingStore } from '@tabler/icons-react';
import User1 from 'assets/images/users/user-round.svg';

const ListItemWrapper = ({ children }) => {
  return (
    <Grid container direction="column" sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider', cursor: 'pointer', '&:hover': { bgcolor: 'primary.light' } }}>
      {children}
    </Grid>
  );
};

ListItemWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const NotificationList = () => {
  const theme = useTheme();

  const chipStyles = {
    height: 20,
    padding: '0.35 0.8px',
    fontSize: '0.65rem',
    borderRadius: '12px',
  };

  const chipErrorStyles = {
    ...chipStyles,
    color: theme.palette.orange.dark,
    backgroundColor: theme.palette.orange.light,
    marginRight: '5px',
  };

  const chipWarningStyles = {
    ...chipStyles,
    color: theme.palette.warning.dark,
    backgroundColor: theme.palette.warning.light,
  };

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 280,
        py: 0,
        borderRadius: '10px',
        '& .MuiDivider-root': {
          my: 0,
        },
      }}
    >
      <ListItemWrapper>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="John Doe" src={User1} />
          </ListItemAvatar>
          <ListItemText primary="John Doe" />
          <ListItemSecondaryAction>
            <Typography variant="caption" display="block" gutterBottom>
              2 min ago
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <Grid item xs={12}>
          <Grid container spacing={1} sx={{ pt: 1 }}>
            <Grid item>
              <Chip label="U" sx={chipErrorStyles} />
            </Grid>
            <Grid item>
              <Chip label="N" sx={chipWarningStyles} />
            </Grid>
          </Grid>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              sx={{
                color: theme.palette.success.dark,
                backgroundColor: theme.palette.success.light,
              }}
            >
              <IconBuildingStore stroke={1.5} size="1rem" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={<Typography variant="subtitle1">Store Verification Done</Typography>} />
          <ListItemSecondaryAction>
            <Typography variant="caption" display="block" gutterBottom>
              5 min ago
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <Grid item xs={12}>
          <Grid container spacing={1} sx={{ pt: 1 }}>
            <Grid item>
              <Chip label="U" sx={chipErrorStyles} />
            </Grid>
          </Grid>
        </Grid>
      </ListItemWrapper>
    </List>
  );
};

NotificationList.propTypes = {
  // You can add propTypes here if you plan to pass props in the future
};

export default NotificationList;
