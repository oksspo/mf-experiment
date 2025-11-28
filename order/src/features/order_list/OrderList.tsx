import React from "react";
import {
    Box,
    Typography,
    Paper,
    TextField,
    InputAdornment,
    IconButton,
    FormControl,
    Select,
    MenuItem,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Checkbox,
    Stack,
    Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

type OrderStatus = "accepted" | "draft" | "finalInvoice";

interface Order {
    id: string;
    orderNumber: string;
    address: string;
    location: string;
    totalArea: string;
    status: OrderStatus;
    totalPriceGrossTop: string;
    totalPriceGrossBottom: string;
    lastChange: string;
    endDate: string;
}

const orders: Order[] = [
    {
        id: "1",
        orderNumber: "DZR-19642",
        address: "Rheinhäuser Straße 106\n68165 Mannheim",
        location: "18936106.1010\n106/010/3. OG links",
        totalArea: "52.90 m²",
        status: "accepted",
        totalPriceGrossTop: "€1,016.31",
        totalPriceGrossBottom: "€1,016.31",
        lastChange: "11/27/2025",
        endDate: "01/01/2026",
    },
    {
        id: "2",
        orderNumber: "DZR-19641",
        address: "Arthur-Hoffmann-Straße 59\n04275 Leipzig",
        location: "1208012\nEG rechts",
        totalArea: "51.40 m²",
        status: "draft",
        totalPriceGrossTop: "€987.75",
        totalPriceGrossBottom: "€987.75",
        lastChange: "11/27/2025",
        endDate: "01/01/2026",
    },
    {
        id: "3",
        orderNumber: "DZR-19640",
        address: "Rheinhäuser Straße 106\n68165 Mannheim",
        location: "18936106.1010\n106/010/3. OG links",
        totalArea: "52.90 m²",
        status: "finalInvoice",
        totalPriceGrossTop: "€1,669.36",
        totalPriceGrossBottom: "€1,669.36",
        lastChange: "11/27/2025",
        endDate: "01/01/2026",
    },
];

const statusConfig: Record<
    OrderStatus,
    { label: string; borderColor: string; textColor: string }
> = {
    accepted: {
        label: "Accepted",
        borderColor: "#00747a",
        textColor: "#00747a",
    },
    draft: {
        label: "Draft",
        borderColor: "#f6b800",
        textColor: "#cc8e00",
    },
    finalInvoice: {
        label: "Final Invoice Is…",
        borderColor: "#00747a",
        textColor: "#00747a",
    },
};

const StatusPill: React.FC<{ status: OrderStatus }> = ({status}) => {
    const cfg = statusConfig[status];
    return (
        <Chip
            label={cfg.label}
            variant="outlined"
            sx={{
                borderColor: cfg.borderColor,
                color: cfg.textColor,
                borderRadius: "999px",
                px: 1.8,
                fontSize: 12,
                height: 32,
            }}
        />
    );
};

export const OrderList: React.FC = () => {
    return (
        <Box
            sx={{
                bgcolor: "#f4f4f4",
                minHeight: "100vh",
                p: 4,
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 300,
                    textTransform: "uppercase",
                    color: "#214553",
                    mb: 3,
                }}
            >
                Orders
            </Typography>

            <Paper
                elevation={2}
                sx={{
                    borderRadius: 1,
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        p: 2.5,
                    }}
                >
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Search by order number or address"
                        sx={{bgcolor: "#f7f7f7"}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{color: "#9e9e9e"}}/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                {/* Filters row */}
                <Box
                    sx={{
                        p: 2.5,
                        borderBottom: "1px solid #e0e0e0",
                    }}
                >
                    <Stack direction="row" spacing={2} flexWrap="wrap">
                        {[
                            "Status",
                            "Creators",
                            "Branch",
                            "Portfolio",
                            "Contractors",
                            "Open defect",
                            "Last change",
                            "Target end date",
                        ].map((label) => (
                            <FormControl
                                key={label}
                                size="small"
                                sx={{minWidth: 140, bgcolor: "#ffffff"}}
                            >
                                <Select
                                    displayEmpty
                                    value=""
                                    renderValue={(selected) =>
                                        selected ? selected : label
                                    }
                                >
                                    <MenuItem value="">
                                        <em>All</em>
                                    </MenuItem>
                                    <MenuItem value="option1">Option 1</MenuItem>
                                    <MenuItem value="option2">Option 2</MenuItem>
                                </Select>
                            </FormControl>
                        ))}
                    </Stack>
                </Box>

                {/* "Actions / Exports" bar */}
                <Box
                    sx={{
                        px: 2.5,
                        py: 1.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #e0e0e0",
                        bgcolor: "#fafafa",
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{color: "#b0b0b0", textTransform: "uppercase"}}
                    >
                        Actions
                    </Typography>

                    <Box
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.5,
                            cursor: "pointer",
                            color: "#0095b9",
                            textTransform: "uppercase",
                            fontSize: 12,
                        }}
                    >
                        <IconButton size="small">
                            <DownloadOutlinedIcon fontSize="small"/>
                        </IconButton>
                        <Typography variant="body2" sx={{fontWeight: 500}}>
                            Exports
                        </Typography>
                    </Box>
                </Box>

                {/* Table */}
                <Box sx={{overflowX: "auto"}}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox"/>
                                <TableCell
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: 12,
                                        textTransform: "uppercase",
                                        color: "#607d8b",
                                    }}
                                >
                                    Order number
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: 12,
                                        textTransform: "uppercase",
                                        color: "#607d8b",
                                    }}
                                >
                                    Address
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: 12,
                                        textTransform: "uppercase",
                                        color: "#607d8b",
                                    }}
                                >
                                    Location
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: 12,
                                        textTransform: "uppercase",
                                        color: "#607d8b",
                                    }}
                                >
                                    Total area
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: 12,
                                        textTransform: "uppercase",
                                        color: "#607d8b",
                                    }}
                                >
                                    Status
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: 12,
                                        textTransform: "uppercase",
                                        color: "#607d8b",
                                    }}
                                >
                                    Total price gross
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: 12,
                                        textTransform: "uppercase",
                                        color: "#607d8b",
                                    }}
                                >
                                    Last change
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: 12,
                                        textTransform: "uppercase",
                                        color: "#607d8b",
                                    }}
                                >
                                    End date
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order.id} hover>
                                    <TableCell padding="checkbox">
                                        <Checkbox size="small"/>
                                    </TableCell>

                                    <TableCell
                                        sx={{
                                            color: "#00b3e6",
                                            fontWeight: 500,
                                            cursor: "pointer",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {order.orderNumber}
                                    </TableCell>

                                    <TableCell sx={{whiteSpace: "pre-line"}}>
                                        {order.address}
                                    </TableCell>

                                    <TableCell sx={{whiteSpace: "pre-line"}}>
                                        {order.location}
                                    </TableCell>

                                    <TableCell>{order.totalArea}</TableCell>

                                    <TableCell>
                                        <StatusPill status={order.status}/>
                                    </TableCell>

                                    <TableCell sx={{whiteSpace: "pre-line"}}>
                                        {order.totalPriceGrossTop}
                                        {"\n"}
                                        {order.totalPriceGrossBottom}
                                    </TableCell>

                                    <TableCell>{order.lastChange}</TableCell>
                                    <TableCell>{order.endDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Paper>
        </Box>
    );
};
