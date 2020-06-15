import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold,
    color: '#333333'
  },
}));

const ProjectsExpansionPanel = (props) => {
  const classes = useStyles();
  const { projects = [] } = props;

  return (
    <div className={classes.root}>
      {
        projects.map(project => (
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={project.title}
              id={project.title}
            >
              <Typography className={classes.heading}>{project.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h6">
                    {project.description}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {
                    project.url && (
                      <div>
                        <a target="_blank" href={project.url}>
                          <Typography color="primary" variant="h6">
                            Click here for more details
                          </Typography>
                        </a>
                      </div>
                    )
                  }
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))
      }
    </div>
  );
}

export default ProjectsExpansionPanel;
