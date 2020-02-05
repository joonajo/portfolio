import * as React from 'react'

const css = require('./Admin.module.css')

const Admin: React.FunctionComponent = (): JSX.Element => {

    return (
        <div className={css.AdminWrapper}>
            <p>Admin</p>
        </div>
    )
}

export default Admin