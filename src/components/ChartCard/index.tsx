import React from 'react'
import { Card, CardContent, CardHeader, CardProps, Tooltip, Switch } from "@mui/material";
import { styled } from '@mui/material/styles';
import { ReactNode } from "react";
import { ChartCardAction } from "./ChartCardAction";
import { IFrame } from "../IFrame";
import { Typography } from "../Typography";
import { Box } from "../Box";

export type RTCardProps = CardProps  & {
    title?: string,
    height?: string,
    headerActions: ReactNode,
    titleveriant: any,
    iframeLink: any,
    exportData: Function,
    viz?: any,
    hideExpand?: boolean,
    hideToggelView?: boolean,
    switchView?: Function,
    showTable?: boolean,
    hideExcelExport?: boolean,
    hideCSVExport?: boolean,
    isScheduleReport?: boolean,
    scheduleFlag?: boolean,
    toggleReport?: Function,
    fullpageLink?: string
    id?: string
};

const MUICardHeader = styled(CardHeader)({
  backgroundColor: "#CBE8F8",
  color: "#222222"
})

export const ChartCard = ({ height,
  title,
  titleveriant,
  headerActions,
  iframeLink,
  exportData = () => { },
  viz = {},
  hideExpand = false,
  hideToggelView = false,
  switchView = () => { },
  showTable = false,
  hideExcelExport = false,
  hideCSVExport = false,
  isScheduleReport = false,
  scheduleFlag = false,
  toggleReport = () => { },
  fullpageLink,
  id,
  ...props
}: RTCardProps) => {
    return (
      <Card {...props} className="tableau-chart-card">
        <MUICardHeader
          title={
            <Box>
                <Typography variant={titleveriant} data-testid="card-title" sx={{ fontSize: "16px", fontWeight: "bold" }}>
                    {title}
                    {isScheduleReport && 
                      <><Box component="span" sx={{marginLeft: '10px'}}>
                          <Tooltip title={scheduleFlag ? "Switch to Daily View" : "Switch to Weekly View"}>
                            <Switch checked={scheduleFlag} onChange={() => toggleReport()} inputProps={{ 'aria-label': 'controlled' }} />
                          </Tooltip>
                      </Box>
                      {scheduleFlag ? 'Weekly' : 'Daily'}</> 
                    }
                </Typography>
            </Box>
          }
          action={
            <ChartCardAction isScheduleReport={isScheduleReport} exportData={exportData} switchView={switchView} hideExpand={hideExpand} hideToggelView={hideToggelView} viz={viz} showTable={showTable} hideExcelExport={hideExcelExport} hideCSVExport={hideCSVExport} scheduleFlag={scheduleFlag} id={id} fullpageLink={fullpageLink} />
          }
        />
        <CardContent data-testid="card-content" sx={{ border: '1px #D1D6DC solid', minHeight: `${height}` }}>
          {iframeLink ? (<IFrame src={iframeLink} />) : props.children}
        </CardContent>
      </Card>
    )
};