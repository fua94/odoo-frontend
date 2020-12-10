# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request

from odoo.addons.website.controllers.main import Website


class AlphaBuildersWebsite(Website):
    @http.route(auth='public')
    def index(self, **kw):
        super(Website, self).index()
        return request.render('my_theme.homepage')

            
