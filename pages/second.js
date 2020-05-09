import Link from 'next/link';
import { Pagination } from 'antd';

export default () => (
	<div>
		<Pagination />
		<Link href="/">
			<a>Home</a>
		</Link>
	</div>
);
