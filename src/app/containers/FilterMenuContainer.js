import FilterMenu from '../components/FilterMenu'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../AC'

export default connect(null, {setVisibilityFilter})(FilterMenu)
