import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ValidatePhone from '../../Component/Register/validatePhone';
import { registerUserAction, registerMobileAction } from '../../Actions/register';

import {
    selectRegisterMobileRequested, selectError
} from '../../Selectors/register';

const mapStateToProps = createStructuredSelector({
    error: selectError(),
    phoneValidationRequested:selectRegisterMobileRequested()
    //   isAuthed: selectisAuthed()
})

const mapDispatchToProps = {
    registerUser: registerUserAction,
    validatePhone: registerMobileAction

};
export default connect(mapStateToProps, mapDispatchToProps)(ValidatePhone);