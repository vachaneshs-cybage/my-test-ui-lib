import React, { ReactNode, useEffect, useState } from "react";
import { Box } from "../Box";
import { Button } from "../Button";
import { Alert } from "../Alert";
import { TextField } from "../TextField";

export type Props = {
  login: Function,
  message: string,
  setMessage: Function,
  logo: ReactNode | any
}

export const LoginForm = ({ login, message, setMessage, logo = 'Logo' }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState<any>(null);
  const [passwordError, setPasswordError] = useState<any>(null);
  const [isFormValid, setFormValid] = useState(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(username !== '' && password !== ''){
      setFormValid(false)
      const formData = {
        username: username,
        password: password
      }
      login(formData)
    }else{
      setFormValid(false)
      setUsernameError(!username ? "Username is required" : null)
      setPasswordError(!password ? "Password is required" : null)
    }
  }

  useEffect(() => {
    if(!isFormValid){
      setUsernameError(!username ? "Username is required" : null)
      setPasswordError(!password ? "Password is required" : null)
    }
  }, [password, username])
  
  
  useEffect(() => {
    setMessage(null)
  }, [])

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ position: 'absolute', top: '30%' }}>
        <Box sx={{ textAlign: 'center' }} data-testid="app-logo">
          {logo}
        </Box>
        {message && <Box>
          <Alert severity="error" data-testid="alert-message">{message}</Alert>
        </Box>}
        <Box>
          <TextField
            margin="normal"
            required
            fullWidth
            data-testid="username"
            id="username"
            label="Username"
            name="username"
            variant="standard"
            autoComplete="username"
            value={username}
            error={!isFormValid && !username}
            helperText={usernameError}
            autoFocus
            onChange={(e: any) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            data-testid="password"
            variant="standard"
            name="password"
            label="Password"
            type="password"
            id="password"
            error={!isFormValid && !password}
            helperText={passwordError}
            value={password}
            autoComplete="current-password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <Button
            label="Sign In"
            id="login-btn"
            type="submit"
            data-testid="login-btn"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </>
  )
}