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

const FONT_FAMILY = `Roboto, "Helvetica Neue", sans-serif`;

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
];

const statusConfig = {
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
} as const;

const StatusPill: React.FC<{ status: OrderStatus }> = ({ status }) => {
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
                height: 32,
                fontSize: 12,
                fontFamily: FONT_FAMILY,
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
                fontFamily: FONT_FAMILY,
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 300,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#214553",
                    mb: 3,
                    fontFamily: FONT_FAMILY,
                }}
            >
                Orders
            </Typography>

            <Paper elevation={2} sx={{ borderRadius: 1, overflow: "hidden" }}>
                {/* SEARCH */}
                <Box
                    sx={{
                        p: 2.5,
                        borderBottom: "1px solid #e0e0e0",
                    }}
                >
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Search by order number or address"
                        sx={{
                            bgcolor: "#f7f7f7",
                            "& .MuiInputBase-root": {
                                fontSize: 14,
                                fontFamily: FONT_FAMILY,
                            },
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: "#9e9e9e" }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                <Box sx={{ p: 2.5, borderBottom: "1px solid #e0e0e0" }}>
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
                                sx={{
                                    minWidth: 140,
                                    bgcolor: "#fff",
                                    "& .MuiSelect-select": {
                                        fontFamily: FONT_FAMILY,
                                        fontSize: 13,
                                    },
                                }}
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

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        px: 2.5,
                        py: 1.5,
                        fontFamily: FONT_FAMILY,
                    }}
                >
                    <Typography
                        sx={{
                            color: "#b0b0b0",
                            textTransform: "uppercase",
                            fontSize: 11,
                            letterSpacing: "0.08em",
                            fontFamily: FONT_FAMILY,
                        }}
                    >
                        Actions
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            cursor: "pointer",
                            color: "#0095b9",
                            fontSize: 12,
                            fontFamily: FONT_FAMILY,
                        }}
                    >
                        <IconButton size="small">
                            <DownloadOutlinedIcon fontSize="small" />
                        </IconButton>
                        <Typography sx={{ fontWeight: 500, fontFamily: FONT_FAMILY }}>
                            Exports
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ overflowX: "auto" }}>
                    <Table
                        size="small"
                        sx={{
                            "& .MuiTableHead-root": { backgroundColor: "#f3f3f3" },

                            "& .MuiTableCell-head": {
                                fontFamily: FONT_FAMILY,
                                fontSize: 11,
                                fontWeight: 500,
                                textTransform: "uppercase",
                                letterSpacing: "0.06em",
                                color: "#214553",
                                borderBottom: "1px solid #e0e0e0",
                                paddingY: 1.5,
                            },

                            "& .MuiTableCell-body": {
                                fontFamily: FONT_FAMILY,
                                fontSize: 13,
                                color: "#4b4b4b",
                                borderBottom: "1px solid #e0e0e0",
                                paddingY: 1.5,
                            },

                            "& .MuiCheckbox-root": {
                                color: "#757575",
                            },

                            "& .MuiTableRow-root:hover": {
                                backgroundColor: "#f9f9f9",
                            },
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox" />
                                <TableCell>Order number</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Location</TableCell>
                                <TableCell align="right">Total area</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="right">Total price gross</TableCell>
                                <TableCell align="right">Last change</TableCell>
                                <TableCell align="right">End date</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {orders.map((o) => (
                                <TableRow key={o.id} hover>
                                    <TableCell padding="checkbox">
                                        <Checkbox size="small" />
                                    </TableCell>

                                    <TableCell
                                        sx={{
                                            color: "#00b3e6",
                                            fontWeight: 500,
                                            cursor: "pointer",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {o.orderNumber}
                                    </TableCell>

                                    <TableCell sx={{ whiteSpace: "pre-line" }}>
                                        {o.address}
                                    </TableCell>

                                    <TableCell sx={{ whiteSpace: "pre-line" }}>
                                        {o.location}
                                    </TableCell>

                                    <TableCell align="right">{o.totalArea}</TableCell>

                                    <TableCell align="center">
                                        <StatusPill status={o.status} />
                                    </TableCell>

                                    <TableCell align="right" sx={{ whiteSpace: "pre-line" }}>
                                        {o.totalPriceGrossTop}
                                        {"\n"}
                                        {o.totalPriceGrossBottom}
                                    </TableCell>

                                    <TableCell align="right">{o.lastChange}</TableCell>
                                    <TableCell align="right">{o.endDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Paper>
        </Box>
    );
};
