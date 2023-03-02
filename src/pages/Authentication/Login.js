import React from 'react'
import Card from '@mui/material/Card';
 import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
 import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
// import img from '../../img/walp.jfif'
import { useNavigate } from 'react-router-dom';



function Login() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    sessionStorage.setItem("name",values.username)
    navigate('/dashboard');
  };
  
  return (
    <div className='center'>
     
     <Card className='cardSize' >
      {/* <CardMedia  sx={{ height: 180 }}  image={img}  title="green iguana"/> */}
      <CardContent>
    <Stack alignItems="center">
        <Typography gutterBottom variant="h5"  component="div">
          Hello Again!
        </Typography>
    </Stack>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="" className='linkcolor'>register now!</a>
      </Form.Item>
    </Form>
     
   
      </CardContent>
    </Card>
    </div>
  )
}

export default Login