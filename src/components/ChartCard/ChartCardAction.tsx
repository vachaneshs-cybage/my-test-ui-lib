import {useState, useEffect} from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ListIcon from '@mui/icons-material/List';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import {
    Box,
    IconButton,
    ListItemIcon, styled, Tooltip, Typography 
} from '@mui/material';
import {
    Menu,
    MenuItem,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import React from 'react';

export type ChartCardActionProps = {
    switchView: Function,
    showTable: Boolean,
    exportData: Function,
    viz?: any,
    hideExpand?: Boolean,
    hideToggelView?: Boolean,
    id?: String,
    hideExcelExport?: Boolean,
    hideCSVExport?: Boolean,
    ChartCardAction?: Boolean,
    isScheduleReport?: Boolean,
    scheduleFlag?: any,
    fullpageLink?: string
}

const MUIIconButton = styled(IconButton)({
    color: "#707070"
})

const exportOptions = ['Export to PDF', 'Export to CSV', 'Export to Excel', 'Export as Image', 'Export to PowerPoint']

export const ChartCardAction = ({
  switchView = () => { },
  exportData = () => { },
  showTable = false,
  viz = {},
  hideExpand = false,
  hideToggelView = false,
  id,
  hideExcelExport = false,
  hideCSVExport = false,
  ChartCardAction = false,
  isScheduleReport = false,
  scheduleFlag = false,
  fullpageLink,
  ...props }: ChartCardActionProps) => {
    const [link, setLink] = useState(fullpageLink)

    const onClick = (e: any) => {
        const { value } = e
        exportData(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const toggelView = () => {
        switchView()
    }

    const openFullPageView = () => {
        window.open(link, '_blank')
    }

    useEffect(() => {
        let tableParam = ''
        let scheduleParam = ''
        if(!hideToggelView){
            if(!showTable){
                tableParam = '?type=table'
            }else{
                tableParam = '?type=chart'
            }
            if(isScheduleReport){
                if(scheduleFlag){
                    scheduleParam = '&view=weekly'
                }else{
                    scheduleParam = '&view=daily'
                }
            }
            
        }
        
        setLink(`${fullpageLink}${tableParam}${scheduleParam}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fullpageLink, scheduleFlag, showTable])
    


    return (
        <Box>
            {/* {isScheduleReport && <Box component="span">
                <Tooltip title="Table View"><Switch defaultChecked={scheduleFlag}/></Tooltip>
            </Box>} */}
            {!hideToggelView && <Box component="span">
                <MUIIconButton aria-label="chart-view-toggel" onClick={toggelView} id={`${id}-toggelview`} data-testid={`${id}-toggelview`}>
                    {showTable ? <Tooltip title="Table View"><ListIcon /></Tooltip> : <Tooltip title="Chart View"><ShowChartIcon /></Tooltip>}
                </MUIIconButton>
            </Box>}
            {!hideExpand && <Box component="span">
                <MUIIconButton aria-label="fullscreen-action" onClick={openFullPageView} id={`${id}-screenview`} data-testid={`${id}-screenview`}>
                    <Tooltip title="Full screen"><OpenInNewIcon /></Tooltip>
                </MUIIconButton>
            </Box>}


            <Box component="span">
                <Menu menuButton={
                    <MUIIconButton aria-label="chart-action-options" id={`${id}-more`} data-testid={`${id}-more`}>
                        <Tooltip title="More"><MoreVertIcon /></Tooltip>
                    </MUIIconButton>
                }>
                    <SubMenu label={
                        <>
                            <ListItemIcon>
                                <FileUploadIcon fontSize="small" />
                            </ListItemIcon>
                            <Typography variant="inherit">Export</Typography>
                        </>
                    }>
                        {exportOptions.map((item) => {
                            if ((hideExcelExport && item === 'Export to Excel') || (hideCSVExport && item === 'Export to CSV')) {
                                return ''
                            }
                            return <MenuItem key={item} value={item} onClick={onClick}>{item}</MenuItem>
                        })}
                    </SubMenu>
                    {/* <MenuItem>
                        <ListItemIcon>
                            <ShareIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">Share</Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <InfoOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">Information</Typography>
                    </MenuItem> */}
                </Menu>
            </Box>
        </Box>
    )
};
