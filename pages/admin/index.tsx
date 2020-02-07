import * as React from 'react'

import { NextPage } from 'next'

import Admin from '../../containers/Admin/Admin'

const css = require('./index.module.css')

const AdminPage: NextPage = (): JSX.Element => {

    return (
        <Admin />
    )
}

export default AdminPage