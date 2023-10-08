import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Controller,
  useForm,
} from "react-hook-form";
import { createRecord } from "../../http";
import {Modal} from "@mui/material";
import {useEffect, useState} from "react";

const theme = createTheme();

const defaultValues =  {
      firstName: "",
      lastName: "",
      city: "",
      email: "",
      street: "",
      buildingNumber: "",
      flatNumber: "",
      number: "",
      fromTime: "",
      fromDate: "",
      toTime: "",
      toDate: "",
    };

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function SignUp() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);


    const { handleSubmit, control, reset } = useForm({
    mode: "onChange",
    defaultValues: defaultValues
  });


  const handleModal = () => {
      setOpen(true)
      setTimeout(() => setOpen(false), 2000)
  }
  const onSubmit = async (data) => {
    handleModal()
    reset(defaultValues)
    await createRecord(data);
  };

  return (
    <Box id="sign-up" sx={{ background: "#F6F6F6" }}>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Отлично!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Данные отправлены. Скоро с вами свяжемся
                </Typography>
            </Box>
        </Modal>
      <ThemeProvider theme={theme}>
        <Container component="main" class="container" sx={{ p: 1 }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>
              Предоставление видеоархива
            </Typography>
            <Box
              component="form"
              // noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    name="firstName"
                    // rules={ lastNameValidation }
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        autoComplete="given-name"
                        required
                        fullWidth
                        id="firstName"
                        label="Имя"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    name="lastName"
                    // rules={ lastNameValidation }
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Фамилия"
                        autoComplete="family-name"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    name="city"
                    // rules={ lastNameValidation }
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        autoComplete="given-name"
                        required
                        fullWidth
                        id="city"
                        label="Город"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    name="street"
                    // rules={ lastNameValidation }
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        required
                        fullWidth
                        id="street"
                        label="Улица"
                        autoComplete="family-name"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    name="buildingNumber"
                    // rules={ lastNameValidation }
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        required
                        fullWidth
                        id="buildingNumber"
                        label="Номер дома"
                        name="buildingNumber"
                        autoComplete="family-name"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    name="flatNumber"
                    // rules={ lastNameValidation }
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        required
                        fullWidth
                        id="flatNumber"
                        label="Номер квартиры"
                        autoComplete="family-name"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    name="number"
                    // rules={ lastNameValidation }
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        required
                        fullWidth
                        id="number"
                        label="Номера телефона"
                        name="number"
                        autoComplete="family-name"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    name="email"
                    // rules={ lastNameValidation }
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        required={false}
                        fullWidth
                        id="email"
                        label="Email"
                        autoComplete="family-name"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </Grid>
                <Typography
                  sx={{
                    width: "100%",
                    padding: "16px",
                    paddingBottom: "0px",
                    fontWeight: 600,
                  }}
                >
                  Предоставляемый период
                </Typography>
                <Grid
                  item
                  xs={12}
                  sm={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>С:</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Controller
                    control={control}
                    name="fromTime"
                    // rules={ lastNameValidation }
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        label="Время"
                        InputLabelProps={{ shrink: true }}
                        type="time"
                        id="fromTime"
                        required
                        fullWidth
                        autoComplete="family-name"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Controller
                    control={control}
                    name="fromDate"
                    // rules={ lastNameValidation }
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        label="Дата"
                        InputLabelProps={{ shrink: true }}
                        type="date"
                        id="fromDate"
                        required
                        fullWidth
                        autoComplete="family-name"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>По:</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Controller
                    control={control}
                    name="toTime"
                    // rules={ lastNameValidation }
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        label="Время"
                        InputLabelProps={{ shrink: true }}
                        type="time"
                        id="toTime"
                        required
                        fullWidth
                        autoComplete="family-name"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Controller
                    control={control}
                    name="toDate"
                    // rules={ lastNameValidation }
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        label="Дата"
                        InputLabelProps={{ shrink: true }}
                        type="date"
                        id="toDate"
                        required
                        fullWidth
                        autoComplete="family-name"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="sign-button"
              >
                Отправить данные
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
}
