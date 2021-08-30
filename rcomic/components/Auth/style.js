import {makeStyles} from '@material-ui/core'

export default makeStyles((theme)=>({
    paper:{
        marginTop:theme.spacing(8),
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding:theme.spacing(2)
    },
    form:{
        width:'100%',
        marginTop:theme.spacing(3)
    },
    fields:{
        marginBottom:theme.spacing(1),
        marginTop:theme.spacing(1)
    }
}))