import React from 'react'
import styled from 'styled-components'

import { Form, Input, Button, Row, Col, Select } from 'antd'

import useUser from '../hooks'

import { debounceFunction } from 'app/utils/core';

const FilterBar = () => {
  const { listUser, handleFetch } = useUser()
  const [form] = Form.useForm()

  const genderOption = [
    {
      label: 'All',
      value: 'all'
    }, {
      label: 'Female',
      value: 'female'
    }, {
      label: 'Male',
      value: 'male'
    }
  ]

  const handleSearch = () => {
    
    debounceFunction(() => {
      const params = {
        page: 1,
        sortBy: listUser.request.sortBy,
        sortOrder: listUser.request.sortOrder,
        ...form.getFieldValue()
      } 

      handleFetch(params)
    }, 1000)
  }

  const handleSelect = () => {
    const params = {
      page: 1,
      sortBy: listUser.request.sortBy,
      sortOrder: listUser.request.sortOrder,
      ...form.getFieldValue()
    } 
    handleFetch(params)
  }

  const handleReset = () => {
    form.resetFields()
    handleFetch({
      page: 1
    })
  }

  return (
    <>
      <Form
        form={form}
        layout="vertical"
      >
        <Row gutter={20}>
          <Col md={6} xs={24}>
            <Form.Item label="Search" name="keyword">
              <Input onChange={handleSearch} />
            </Form.Item>
          </Col>
          <Col md={6} xs={24}>
            <Form.Item label="Gender" name="gender">
              <Select onChange={handleSelect} options={genderOption} />
            </Form.Item>
          </Col>
          <Col md={4} xs={24}>
            <ButtonReset htmlType="button" type="primary" onClick={handleReset}>
              Reset Filter
            </ButtonReset>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default FilterBar

const ButtonReset = styled(Button)`
  @media screen and (min-width: 789px){
    position: absolute;
    bottom: 24px;
  }
`