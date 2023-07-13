// ** React Imports
import { useState, forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Fade from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import Payment from 'payment'
import Cards from 'react-credit-cards'

// ** Util Import
import { formatCVC, formatExpirationDate, formatCreditCardNumber } from 'src/@core/utils/format'

// ** Styled Component Imports
import CardWrapper from 'src/@core/styles/libs/react-credit-cards'

// ** Styles Import
import 'react-credit-cards/es/styles-compiled.css'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import CardHeader from "@mui/material/CardHeader";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Link from "@mui/material/Link";

const Transition = forwardRef(function Transition(props, ref) {
    return <Fade ref={ref} {...props} />
})

const Connection = () => {
    // ** States
    const [name, setName] = useState('')
    const [show, setShow] = useState(false)
    const [cvc, setCvc] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [focus, setFocus] = useState()
    const [expiry, setExpiry] = useState('')
    const handleBlur = () => setFocus(undefined)

    const handleInputChange = ({ target }) => {
        if (target.name === 'number') {
            target.value = formatCreditCardNumber(target.value, Payment)
            setCardNumber(target.value)
        } else if (target.name === 'expiry') {
            target.value = formatExpirationDate(target.value)
            setExpiry(target.value)
        } else if (target.name === 'cvc') {
            target.value = formatCVC(target.value, cardNumber, Payment)
            setCvc(target.value)
        }
    }

    const handleClose = () => {
        setShow(false)
        setCvc('')
        setName('')
        setExpiry('')
        setCardNumber('')
        setFocus(undefined)
    }

    const [values, setValues] = useState({
        password: '',
        showPassword: false
    })

    const [confirmPassValues, setConfirmPassValues] = useState({
        password: '',
        showPassword: false
    })

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value })
    }

    const handleConfirmPassChange = prop => event => {
        setConfirmPassValues({ ...confirmPassValues, [prop]: event.target.value })
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }

    const handleClickConfirmPassShow = () => {
        setConfirmPassValues({ ...confirmPassValues, showPassword: !confirmPassValues.showPassword })
    }

    const handleMouseDownPassword = event => {
        event.preventDefault()
    }
    return (
        <Card>
            <CardContent sx={{ textAlign: 'center', '& svg': { mb: 2 } }}>
                <Icon icon='mdi:credit-card-outline' fontSize='2rem' />
                <Typography variant='h6' sx={{ mb: 4 }}>
                    Let's Tweet is a powerful web tool that revolutionizes Twitter scheduling. With its intuitive interface, users can effortlessly manage and plan their tweets ahead of time. Powered by AI, Let's Tweet even generates engaging content and organizes data for automatic tweeting, saving you time and boosting your social media presence.
                </Typography>
                <Typography sx={{ mb: 3 }}>
                    <img src="/cirularTwitter.png" alt="img" width={260} sx={{ borderRadius: 1 }}/>
                </Typography>
                <Button variant='contained' onClick={() => setShow(true)}>
                    Connect Twitter Account
                </Button>
            </CardContent>
            <Dialog
                fullWidth
                open={show}
                maxWidth='sm'
                scroll='body'
                onClose={handleClose}
                onBackdropClick={handleClose}
                TransitionComponent={Transition}
            >
                <DialogContent sx={{ pb: 6, px: { xs: 8, sm: 15 }, pt: { xs: 8, sm: 12.5 }, position: 'relative' }}>
                        <CardHeader title='Manual Login' />
                        <CardContent>
                            <form onSubmit={e => e.preventDefault()}>
                                <Grid container spacing={5}>
                                    <Grid item xs={12}>
                                        <TextField fullWidth label='Name' placeholder='Leonard Carter' />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            type='email'
                                            label='Email'
                                            placeholder='carterleonard@gmail.com'

                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor='form-layouts-basic-password'>Password</InputLabel>
                                            <OutlinedInput
                                                label='Password'
                                                value={values.password}
                                                id='form-layouts-basic-password'
                                                onChange={handleChange('password')}
                                                type={values.showPassword ? 'text' : 'password'}
                                                aria-describedby='form-layouts-basic-password-helper'
                                                endAdornment={
                                                    <InputAdornment position='end'>
                                                        <IconButton
                                                            edge='end'
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            aria-label='toggle password visibility'
                                                        >
                                                            <Icon icon={values.showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />

                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor='form-layouts-confirm-password'>Confirm Password</InputLabel>
                                            <OutlinedInput
                                                label='Confirm Password'
                                                value={confirmPassValues.password}
                                                id='form-layouts-confirm-password'
                                                onChange={handleConfirmPassChange('password')}
                                                aria-describedby='form-layouts-confirm-password-helper'
                                                type={confirmPassValues.showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position='end'>
                                                        <IconButton
                                                            edge='end'
                                                            onClick={handleClickConfirmPassShow}
                                                            onMouseDown={handleMouseDownPassword}
                                                            aria-label='toggle password visibility'
                                                        >
                                                            <Icon icon={confirmPassValues.showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                            <FormHelperText id='form-layouts-confirm-password-helper'>
                                                Make sure to type the same password as above
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box
                                            sx={{
                                                gap: 5,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                flexWrap: 'wrap',
                                                alignItems: 'center',
                                                justifyContent: 'center'}}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <IconButton href='/' component={Link} sx={{ color: '#1da1f2' }} onClick={e => e.preventDefault()}>
                                                    <Icon icon='mdi:twitter' width={50} />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                </DialogContent>
                <DialogActions sx={{ pb: { xs: 8, sm: 12.5 }, justifyContent: 'center' }}>
                    <Button variant='contained' sx={{ mr: 2 }} onClick={handleClose}>
                        Login
                    </Button>
                    <Button variant='outlined' color='secondary' onClick={handleClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    )
}

export default Connection
