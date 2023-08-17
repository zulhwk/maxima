import ReactGA from 'react-ga';

const useAnalyticsEventTracker = (category = "pageview", action = "test action", label = "test label") => {
  const eventTracker = () => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;