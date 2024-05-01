import { Stack, Button, Typography, Divider } from "@mui/joy"

function Sidebar({displayMorse, btnOnClickHandler,
    loadProfilePreset1, loadProfilePreset2, loadProfilePreset3, chosePreset
}){
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{minWidth: "15%", marginTop: "5% !important", marginBottom: "5% !important"}}
        >
            <Button onClick={btnOnClickHandler}>
                {
                    displayMorse ? "To Text" : "To Morse"
                }
            </Button>

            <Divider></Divider>
            
            {//Remove btn group when login is implemented
            !chosePreset&&
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
                <Typography>Select Profile</Typography>
                <Button onClick={loadProfilePreset1}>Preset1</Button>
                <Button onClick={loadProfilePreset2}>Preset2</Button>
                <Button onClick={loadProfilePreset3}>Preset3</Button>
            </Stack>
            }
        </Stack>
    )
}

export default Sidebar