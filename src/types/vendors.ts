export type Vendors = {
  corporateName: string
  fantasyName: string
  status: {
    type: 'error' | 'warning' | 'success'
    text: string
  }
}

export type VendorColumns = keyof Vendors
