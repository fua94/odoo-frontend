# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request

# from odoo.addons.website.controllers.main import Website


# class MyThemeWebsite(Website):
#     @http.route(auth='public')
#     def index(self, **kw):
#         super(Website, self).index()
#         return request.render('my_theme.homepage')


class MyThemeController(http.Controller):
    @http.route('/vue', type='http', auth="public", website=True)
    def render_vue_page(self, **post):
        return request.render("my_theme.vue_page", {
            'min_value': 10,
        })

            
