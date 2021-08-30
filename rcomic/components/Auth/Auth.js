import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Container,TextField,Button,makeStyles,Grid,Paper,Typography} from '@material-ui/core'
import useStyle from '../Auth/style'
import {signIn,signUp} from '../../store/actions/auth'
const initState ={name:'',email:'',password:'',confirmPassword:''}
const Auth = () =>{
    const classes = useStyle()
    const dispatch = useDispatch()
    const history = useHistory()
    const [isSignUp,setIsSignUp] = useState(false)
    const [showPassword,setShowPAssword] = useState(false);
    const [formData,setFormData] = useState(initState)
    const handleShowPassword = () => setShowPAssword((prevShowPassWord)=>!prevShowPassWord)
    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleUser=(e)=>{
        e.preventDefault()
        if(isSignUp){
            if(formData.password === formData.confirmPassword){
                dispatch(signUp(formData,history))
            }else{
                alert('wrong password')
            }
        }else{
            console.log(history)
            dispatch(signIn(formData,history))
        }
        console.log(formData)
    }
    const swithcMode = () =>{
        setIsSignUp((prevIsSignUp)=>!prevIsSignUp);
        handleShowPassword(false);
    }
    return(
        <Container>
            <Grid container spacing={1} justifyContent="center">
            <Paper className={classes.paper} elevation={5}>
                <Grid container justifyContent="center">
                <Typography variant="h5">{isSignUp?'Signup':'Signin'}</Typography>
                </Grid>
             <form className={classes.form} noValidate autoComplete="off" onSubmit={handleUser}>
             {
                     isSignUp && (
                         <>
                         <TextField name="name" className={classes.fields} label="Name"  onChange={handleChange} fullWidth variant="outlined" />
                         </>
                     )
                 }
                 <TextField name="email" className={classes.fields}  onChange={handleChange} label="Email" variant="outlined" fullWidth />
                 <TextField name="password" className={classes.fields} onChange={handleChange} label="Password" variant="outlined" fullWidth/>
                 {
                     isSignUp && (
                         <>
                         <TextField name="confirmPassword" className={classes.fields} label="ConfirmPassword"  onChange={handleChange} fullWidth variant="outlined"  />
                         </>
                     )
                 }
                 <Grid container justifyContent="center">
                     <Grid item>
                 <Button className={classes.test} color="secondary" variant="contained" type="submit">{isSignUp?'SignUp':'SignIn'}</Button>
                 </Grid>
                 </Grid>
             </form>
             <Grid container justifyContent="center">
                        <Grid item>
                            <Button onClick={swithcMode}>
                                {isSignUp ?'Already have an account ? Sign In':"Don't have account ? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
             </Paper>
                    </Grid>
        </Container>
    );
}
export default Auth