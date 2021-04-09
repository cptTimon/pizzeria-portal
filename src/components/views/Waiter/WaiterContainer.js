import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, updateStatusInAPI, getLoadingState } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateStatus: (id, status) => dispatch(updateStatusInAPI(id, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
