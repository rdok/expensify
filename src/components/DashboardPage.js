import React from 'react';
import {Link} from 'react-router-dom'

export const DashboardPage = () => (
    <div>
        <h1>Dashboard</h1>
        <h4>Expenses</h4>
        <ul>
            <li><Link to="/edit/cyberpunk-2077">Cyberpunk 2077</Link></li>
            <li><Link to="/edit/witcher-3">The Witcher 3</Link></li>
        </ul>
    </div>
)
