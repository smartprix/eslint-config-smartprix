<template>
	<ela-content-layout padding="0">
		<div slot="head">
			<h3>Links</h3>
			<div class="header-right">
				<el-button
					type="primary"
					icon="plus"
					@click="$view.link()">Add Link
				</el-button>
			</div>
		</div>

		<div slot="filters">
			<el-row type="flex">
				<ela-filter-item label="Status" :span="5">
					<el-select
						size="small"
						clearable
						v-model="filters.status"
						@change="handleFilterChange">
						<el-option value="Active">Active</el-option>
						<el-option value="Inactive">Inactive</el-option>
					</el-select>
				</ela-filter-item>
				<ela-filter-item label="Search" :span="6" float="right">
					<el-input
						icon="search"
						size="small"
						v-model="filters.search"
						@click="handleFilterChange"
						@keyup.native.enter="handleFilterChange">
					</el-input>
				</ela-filter-item>
			</el-row>
		</div>

		<el-table
			:data="links.nodes"
			style="width: 100%"
			stripe
			border
			v-loading="loadingSelfData">
			<el-table-column label="View" align="center" width="90">
				<template scope="scope">
					<el-button
						type="primary"
						size="small"
						icon="edit"
						@click="$view.link(scope.row)">
						<strong>{{ scope.row.id }}</strong>
					</el-button>
				</template>
			</el-table-column>
			<el-table-column prop="url" label="Original URL">
				<template scope="scope">
					<a :href="scope.row.url">{{ scope.row.url }}</a>
				</template>
			</el-table-column>
			<el-table-column prop="slug" label="Shortened URL">
				<template scope="scope">
					<a :href="'http://localhost:4000/'+scope.row.slug">{{ 'http://localhost:4000/'+ scope.row.slug }}</a>
				</template>
			</el-table-column>
			<el-table-column prop="stat.clicks" label="Total Clicks" width="120"></el-table-column>
			<el-table-column prop="status" label="Status" width="100"></el-table-column>
		</el-table>

		<div slot="foot">
			<div class="footer-right">
				<el-pagination
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="filters.page"
					:page-sizes="[20, 50, 100, 250, 500]"
					:page-size="filters.count"
					layout="total, sizes, prev, pager, next, jumper"
					:total="links.totalCount">
				</el-pagination>
			</div>
		</div>

	</ela-content-layout>
</template>

<script>
import {paginationMixin} from 'eslint';

export default {
	name: 'Links',
	mixins: [
		paginationMixin(),
	],

	data() {
		return {
			links: {},
			filters: {
				search: '',
				status: '',
				page: 1,
				count: 20,
			},
		};
	},

	methods: {
		loadSelfData(filters) {
			return this.$api.getLinks(filters).then((links) => {
				this.links = links;
			});
		},
	},

	events: {
		linkMutated() {
			this.reloadSelfData();
		},
	},
};
</script>
