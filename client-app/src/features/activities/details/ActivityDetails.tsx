import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
 import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";
 import  ActivityDetailedChat  from "./ActivityDetailedChat";
import  ActivitiyDetailedSidebar  from "./ActivityDetailedSidebar";
import { ActivityDetailedInfo } from "./ActivityDetailedInfo";
import { RootStoreContext } from "../../../app/stores/rootStore";
import ActivityDetailedHeader from "./ActivityDetailedHeader";

interface DetailParams {
  id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history
}) => {
  const rootStore = useContext(RootStoreContext);
  const { activity, loadActivity, loadingInitial } = rootStore.activityStore;

  useEffect(() => {
    loadActivity(match.params.id) ;
  }, [loadActivity, match.params.id, history]);

  if (loadingInitial) return <LoadingComponent content="loading activity..." />;

  if (!activity) return <h2>Activity Not Found</h2>;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailedHeader activity={activity} />
        <ActivityDetailedChat />
        <ActivityDetailedInfo activity={activity} />
      </Grid.Column>

      <Grid.Column width={6}>
        <ActivitiyDetailedSidebar attendees={activity.userActivities} />
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDetails);
