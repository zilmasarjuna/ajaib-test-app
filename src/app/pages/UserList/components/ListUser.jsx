import React from 'react'
import { Table } from 'antd'

import useUser from '../hooks'

const ListUser = () => {
  const {listUser, handleFetch } = useUser()
  console.log('list user', listUser)
  const columns = [ {
    title: 'Username',
    dataIndex: 'login',
    key: 'login',
    render: (data) => data && data.username,
    sorter: true,
  },  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (data) => data && `${data.title} ${data.first} ${data.last}`,
    sorter: true,
  },  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    sorter: true,
  },  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    sorter: true,
  },  {
    title: 'Registered Date',
    dataIndex: 'registered',
    key: 'registered',
    render: (data) => data && data.date,
    sorter: true,

  }]
  const handleChange = (pagination, _, sorter) => {
    const params = {
      page: pagination.current,
      sortBy: sorter && sorter.field,
      sortOrder: sorter && sorter.order,
      keyword: listUser.request.keyword,
      gender: listUser.request.gender,
    }
    handleFetch(params)
  }

  return (
    <Table 
      dataSource={listUser.data}
      columns={columns}
      loading={listUser.isFetching}
      onChange={handleChange}
      pagination={{ 
        current: listUser.request && listUser.request.page,
        total: 20,
      }}
    />
  )
}

export default ListUser