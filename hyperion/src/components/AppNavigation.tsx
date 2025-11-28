import styled from "styled-components";
import { Box, Stack, Typography } from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";

import { useLocation, useNavigate } from "react-router-dom";

const ACTIVE_COLOR = "#30c0e5";
const INACTIVE_COLOR = "#2f5f72";

const HeaderRoot = styled(Box)`
    background: #ffffff;
    width: 100%;
`;

const HeaderInner = styled(Box)`
    display: flex;
    align-items: center;

    /* ⭐ Align navigation to the right */
    justify-content: flex-end;

    padding: 12px 40px;
`;

const NavStack = styled(Stack)`
    && {
        display: flex;
        align-items: center;
        gap: 48px;
    }
`;

const NavItem = styled(Box)<{ $active?: boolean }>`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    cursor: pointer;
    color: ${({ $active }) => ($active ? ACTIVE_COLOR : INACTIVE_COLOR)};
    transition: color 0.2s ease;

    svg {
        width: 32px;
        height: 32px;
        color: inherit;
    }
`;

const NavLabel = styled(Typography)`
    && {
        font-family: Roboto, "Helvetica Neue", sans-serif;
        font-feature-settings: normal;
        font-kerning: auto;
        font-optical-sizing: auto;
        font-palette: normal;

        font-size: 11px;
        font-weight: 500;
        text-transform: uppercase;
        line-height: 14px;
    }
`;

const Shadow = styled(Box)`
    width: 100%;
    height: 14px;
    opacity: 0.45;
    background-size: cover;
`;

export function AppNavigation() {
    const location = useLocation();
    const navigate = useNavigate();

    const isDashboard = location.pathname === "/" || location.pathname.startsWith("/dashboard");
    const isOrders = location.pathname.startsWith("/order");
    const isInvoices = location.pathname.startsWith("/invoices");

    return (
        <HeaderRoot>
            <HeaderInner>
                <NavStack direction="row">

                    <NavItem $active={isDashboard} onClick={() => navigate("/")}>
                        <DashboardOutlinedIcon />
                        <NavLabel>DASHBOARD</NavLabel>
                    </NavItem>

                    <NavItem $active={isOrders} onClick={() => navigate("/order/list")}>
                        <DescriptionOutlinedIcon />
                        <NavLabel>ORDER</NavLabel>
                    </NavItem>

                    <NavItem $active={isInvoices} onClick={() => navigate("/invoices")}>
                        <EuroOutlinedIcon />
                        <NavLabel>INVOICE</NavLabel>
                    </NavItem>

                </NavStack>
            </HeaderInner>

            <Shadow />
        </HeaderRoot>
    );
}
