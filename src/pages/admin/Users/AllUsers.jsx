import React from 'react'
import { useGetAllUsersQuery } from '../../../lib/features/user/userApi'

const AllUsers = () => {
    const {data} = useGetAllUsersQuery();

    console.log(data)
    
  return (
    <>
<div className="bg-white p-4">
    <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">All products</h2>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded-lg">Add New Product</button>
    </div>

    <div className="shadow rounded-lg border overflow-auto">
        <div className="flex justify-between items-center mb-4 p-4 border-b overflow-x-auto">
            <div className="mb-4">
                <h3 className="text-lg font-medium">All Product</h3>
            </div>
            <div className="flex justify-between items-center gap-4">
                <div>
                    <select className="rounded-lg">
                        <option>Bulk Action</option>
                    </select>
                </div>

                <div>
                    <select className="rounded-lg">
                        <option>All Sellers</option>
                    </select>
                </div>

                <div>
                    <form action="{{ url('/admin/products') }}" method="get">
                        <select name="sort" className="rounded-lg">
                            <option value="">Sort by</option>
                            <option value="name_asc">Name: A-Z</option>
                            <option value="name_desc">Name: Z-A</option>
                            <option value="price_asc">Price: Low to High</option>
                            <option value="price_desc">Price: High to Low</option>
                        </select>
                        <input type="text" name="search" className="rounded-lg px-3 py-2 border border-gray-300" placeholder="Type & Enter" value="{{ request('search') }}"/>
                        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-lg">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>
                <div>
                </div>
            </div>
        </div>

        
        <table className="w-full divide-y divide-gray-200 px-4 overflow-x-auto">
            <thead>
                <tr>
                    <th className="py-1 px-2 lg:px-3 lg:py-4 text-left text-xs font-medium text-gray-500 tracking-wider"><input type="checkbox" className="h-5 w-5 rounded-sm" /></th>
                    <th className="py-1 px-2 lg:px-3 lg:py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Name</th>
                    <th className="py-1 px-2 lg:px-3 lg:py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Added By</th>
                    <th className="py-1 px-2 lg:px-3 lg:py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Info</th>
                    <th className="py-1 px-2 lg:px-3 lg:py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Total Stock</th>
                    <th className="py-1 px-2 lg:px-3 lg:py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Todays Deal</th>
                    <th className="py-1 px-2 lg:px-3 lg:py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Published</th>
                    <th className="py-1 px-2 lg:px-3 lg:py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Featured</th>
                    <th className="py-1 px-2 lg:px-3 lg:py-4 text-right text-xs font-medium text-gray-500 tracking-wider">Options</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 p-4">
                @foreach( $products as $product )
                <tr>
                    <td className="py-1 px-2 lg:px-3 lg:py-4">
                        <input type="checkbox" className="h-5 w-5 rounded-sm" />
                    </td>
                    <td className="py-1 px-2 lg:px-3 lg:py-4">
                        <div className="flex">
                            <div className="flex-shrink-0 h-10 w-10">
                                {"@if ($product->image)"}
                                <img className="h-full w-full object-cover rounded-lg" src="{{asset('upload/' . basename($product->image))}}" alt="{{$product->title}}"/>
                                {"@else"}
                                <img className="h-full w-full object-cover rounded-lg" src="{{asset('upload/placeholder.jpg')}}" alt="{{$product->title}}"/>
                                {"@endif"}
                            </div>
                            <div className="ml-4 w-64">
                                <div className="text-xs font-medium text-gray-900">{"{$product->title}"}</div>
                            </div>
                        </div>
                    </td>
                    <td className="py-1 px-2 lg:px-3 lg:py-4">
                        <div className="text-sm text-gray-900">
                            <p>{"{ Auth::user()->name }"}</p>
                        </div>
                    </td>
                    <td className="py-1 px-2 lg:px-3 lg:py-4">
                        <div className="text-sm text-gray-900 font-mono">
                            Base Price: ৳ {"{number_format($product->regular_price)}"}
                            <br/>
                            Rating: 0.00
                        </div>
                    </td>
                    <td className="py-1 px-2 lg:px-3 lg:py-4">
                        <div className="text-sm text-gray-900">{"{$product->stock_quantity}"}</div>
                    </td>
                    <td className="py-1 px-2 lg:px-3 lg:py-4">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" id="product-switch" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-2 peer-focus:ring-blue-600 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:rounded-full after:transition-transform {{ $product->flash_sale == 1 ? 'bg-green-600 after:bg-white' : 'after:bg-white'}}"></div>

                            <span className="sr-only">Todays Deal</span>
                        </label>
                    </td>
                    <td className="py-1 px-2 lg:px-3 lg:py-4">
                        
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" id="product-switch" className="sr-only peer"/>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-2 peer-focus:ring-blue-600 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:rounded-full after:transition-transform {{ $product->status == 'published' ? 'bg-green-600 after:bg-white' : 'after:bg-white'}}"></div>
                        </label>
                    </td>
                    <td className="py-1 px-2 lg:px-3 lg:py-4">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 peer-checked:bg-blue-600 peer-checked:ring-offset-2 peer-checked:ring-blue-600 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 peer-disabled:bg-gray-400" />
                            <span className="sr-only">Featured</span>
                        </label>
                    </td>
                    <td className="py-1 px-2 lg:px-3 lg:py-4 text-right text-sm font-medium">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded-full">
                            <a href="{{ url('product' , $product->id) }}" className="inline" target="_blank" title="view">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                    <g id="SVGRepo_iconCarrier">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.9944 15.5C13.9274 15.5 15.4944 13.933 15.4944 12C15.4944 10.067 13.9274 8.5 11.9944 8.5C10.0614 8.5 8.49439 10.067 8.49439 12C8.49439 13.933 10.0614 15.5 11.9944 15.5ZM11.9944 13.4944C11.1691 13.4944 10.5 12.8253 10.5 12C10.5 11.1747 11.1691 10.5056 11.9944 10.5056C12.8197 10.5056 13.4888 11.1747 13.4888 12C13.4888 12.8253 12.8197 13.4944 11.9944 13.4944Z" fill="#fff" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 5C7.18879 5 3.9167 7.60905 2.1893 9.47978C0.857392 10.9222 0.857393 13.0778 2.1893 14.5202C3.9167 16.391 7.18879 19 12 19C16.8112 19 20.0833 16.391 21.8107 14.5202C23.1426 13.0778 23.1426 10.9222 21.8107 9.47978C20.0833 7.60905 16.8112 5 12 5ZM3.65868 10.8366C5.18832 9.18002 7.9669 7 12 7C16.0331 7 18.8117 9.18002 20.3413 10.8366C20.9657 11.5128 20.9657 12.4872 20.3413 13.1634C18.8117 14.82 16.0331 17 12 17C7.9669 17 5.18832 14.82 3.65868 13.1634C3.03426 12.4872 3.03426 11.5128 3.65868 10.8366Z" fill="#fff" />
                                    </g>

                                </svg>
                            </a>
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full">
                            <a href="{{ url('admin/duplicate_product' , $product->id) }}" className="inline">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z" stroke="#fff" strokeWidth="1.5" />
                                    <path d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5" stroke="#fff" strokeWidth="1.5" />
                                </svg>
                            </a>
                        </button>
                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-2 rounded-full">
                            <a href="{{ url('/admin/edit_product', $product->id) }}">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40974 4.40973 4.7157 4.21799 5.09202C4 5.51985 4 6.0799 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V12.5M15.5 5.5L18.3284 8.32843M10.7627 10.2373L17.411 3.58902C18.192 2.80797 19.4584 2.80797 20.2394 3.58902C21.0205 4.37007 21.0205 5.6364 20.2394 6.41745L13.3774 13.2794C12.6158 14.0411 12.235 14.4219 11.8012 14.7247C11.4162 14.9936 11.0009 15.2162 10.564 15.3882C10.0717 15.582 9.54378 15.6885 8.48793 15.9016L8 16L8.04745 15.6678C8.21536 14.4925 8.29932 13.9048 8.49029 13.3561C8.65975 12.8692 8.89125 12.4063 9.17906 11.9786C9.50341 11.4966 9.92319 11.0768 10.7627 10.2373Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>

                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-full">
                            <a href="{{ url('/admin/delete_product', $product->id) }}">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </a>
                        </button>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
        <div className="p-4">
            {"{$products->links()}"}
        </div>
        @else
        <p className="text-center py-20 text-gray-400"><i className="fas fa-sad-tear text-[200px] mb-5 text-red-400"></i> <br/> No products found.</p>
        @endif
    </div>
</div>
    
    </>
  )
}
export default AllUsers