/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/dokan-admin-coupon.js":
/*!*********************************************!*\
  !*** ./assets/src/js/dokan-admin-coupon.js ***!
  \*********************************************/
/***/ (() => {

eval("(function ($) {\n  var default_all_vendor = $('#admin_coupons_enabled_for_vendor').is(\":checked\") ? 'yes' : 'no';\n  dokan_admin_coupons_enabled_all_vendors(default_all_vendor);\n  dokan_admin_shared_coupon_amount_field($('#coupon_commissions_type').val());\n  $(\"#usage_restriction_coupon_data .options_group:nth-of-type(2)\").remove();\n  $('body').on('click', '#admin_coupons_enabled_for_vendor', function (e) {\n    var enable_all_vendor = $('#admin_coupons_enabled_for_vendor').is(\":checked\") ? 'yes' : 'no';\n    dokan_admin_coupons_enabled_all_vendors(enable_all_vendor);\n  });\n  $('body').on('change', '#coupon_commissions_type', function (e) {\n    var commissions_type = $('#coupon_commissions_type').val();\n    dokan_admin_shared_coupon_amount_field(commissions_type);\n  });\n\n  function dokan_admin_coupons_enabled_all_vendors(enable_all_vendor) {\n    if (enable_all_vendor === 'yes') {\n      $(\".dokan-admin-coupons-include-vendors\").hide();\n      $(\".dokan-admin-coupons-exclude-vendors\").show();\n    } else {\n      $(\".dokan-admin-coupons-include-vendors\").show();\n      $(\".dokan-admin-coupons-exclude-vendors\").hide();\n    }\n  }\n\n  function dokan_admin_shared_coupon_amount_field(commissions_type) {\n    if (commissions_type === 'shared_coupon') {\n      $(\".admin_shared_coupon_amount_field\").show();\n      $(\".admin_shared_coupon_type_field\").show();\n    } else {\n      $(\".admin_shared_coupon_amount_field\").hide();\n      $(\".admin_shared_coupon_type_field\").hide();\n    }\n\n    $(\".coupon_commissions_type_label\").hide();\n    $(\".coupon_commissions_type_\" + commissions_type).show();\n  }\n})(jQuery);\n/*global wc_enhanced_select_params */\n\n\njQuery(function ($) {\n  function getEnhancedSelectFormatString() {\n    return {\n      'language': {\n        errorLoading: function errorLoading() {\n          return wc_enhanced_select_params.i18n_searching;\n        },\n        inputTooLong: function inputTooLong(args) {\n          var overChars = args.input.length - args.maximum;\n\n          if (1 === overChars) {\n            return wc_enhanced_select_params.i18n_input_too_long_1;\n          }\n\n          return wc_enhanced_select_params.i18n_input_too_long_n.replace('%qty%', overChars);\n        },\n        inputTooShort: function inputTooShort(args) {\n          var remainingChars = args.minimum - args.input.length;\n\n          if (1 === remainingChars) {\n            return wc_enhanced_select_params.i18n_input_too_short_1;\n          }\n\n          return wc_enhanced_select_params.i18n_input_too_short_n.replace('%qty%', remainingChars);\n        },\n        loadingMore: function loadingMore() {\n          return wc_enhanced_select_params.i18n_load_more;\n        },\n        maximumSelected: function maximumSelected(args) {\n          if (args.maximum === 1) {\n            return wc_enhanced_select_params.i18n_selection_too_long_1;\n          }\n\n          return wc_enhanced_select_params.i18n_selection_too_long_n.replace('%qty%', args.maximum);\n        },\n        noResults: function noResults() {\n          return wc_enhanced_select_params.i18n_no_matches;\n        },\n        searching: function searching() {\n          return wc_enhanced_select_params.i18n_searching;\n        }\n      }\n    };\n  }\n\n  try {\n    $(document.body).on('wc-enhanced-select-init', function () {\n      // Regular select boxes\n      $(':input.wc-enhanced-select, :input.chosen_select').filter(':not(.enhanced)').each(function () {\n        var select2_args = $.extend({\n          minimumResultsForSearch: 10,\n          allowClear: $(this).data('allow_clear') ? true : false,\n          placeholder: $(this).data('placeholder')\n        }, getEnhancedSelectFormatString());\n        $(this).selectWoo(select2_args).addClass('enhanced');\n      });\n      $(':input.wc-enhanced-select-nostd, :input.chosen_select_nostd').filter(':not(.enhanced)').each(function () {\n        var select2_args = $.extend({\n          minimumResultsForSearch: 10,\n          allowClear: true,\n          placeholder: $(this).data('placeholder')\n        }, getEnhancedSelectFormatString());\n        $(this).selectWoo(select2_args).addClass('enhanced');\n      });\n\n      function display_result(self, select2_args) {\n        select2_args = $.extend(select2_args, getEnhancedSelectFormatString());\n        $(self).selectWoo(select2_args).addClass('enhanced');\n\n        if ($(self).data('sortable')) {\n          var $select = $(self);\n          var $list = $(self).next('.select2-container').find('ul.select2-selection__rendered');\n          $list.sortable({\n            placeholder: 'ui-state-highlight select2-selection__choice',\n            forcePlaceholderSize: true,\n            items: 'li:not(.select2-search__field)',\n            tolerance: 'pointer',\n            stop: function stop() {\n              $($list.find('.select2-selection__choice').get().reverse()).each(function () {\n                var id = $(this).data('data').id;\n                var option = $select.find('option[value=\"' + id + '\"]')[0];\n                $select.prepend(option);\n              });\n            }\n          }); // Keep multiselects ordered alphabetically if they are not sortable.\n        } else if ($(self).prop('multiple')) {\n          $(self).on('change', function () {\n            var $children = $(self).children();\n            $children.sort(function (a, b) {\n              var atext = a.text.toLowerCase();\n              var btext = b.text.toLowerCase();\n\n              if (atext > btext) {\n                return 1;\n              }\n\n              if (atext < btext) {\n                return -1;\n              }\n\n              return 0;\n            });\n            $(self).html($children);\n          });\n        }\n      } // Ajax product search box\n\n\n      $(':input.dokan-coupons-exclude-include-product-search').filter(':not(.enhanced)').each(function () {\n        var select2_args = {\n          allowClear: $(this).data('allow_clear') ? true : false,\n          placeholder: $(this).data('placeholder'),\n          minimumInputLength: $(this).data('minimum_input_length') ? $(this).data('minimum_input_length') : '3',\n          escapeMarkup: function escapeMarkup(m) {\n            return m;\n          },\n          ajax: {\n            url: wc_enhanced_select_params.ajax_url,\n            dataType: 'json',\n            delay: 250,\n            data: function data(params) {\n              return {\n                term: params.term,\n                action: $(this).data('action') || 'woocommerce_json_search_products_and_variations',\n                security: wc_enhanced_select_params.search_products_nonce,\n                exclude: $(this).data('exclude'),\n                exclude_type: $(this).data('exclude_type'),\n                include: $(this).data('include'),\n                limit: $(this).data('limit'),\n                display_stock: $(this).data('display_stock'),\n                search_products_for_vendor_coupon: 'yes',\n                include_vendor_ids: $('.dokan_admin_coupons_vendors_include_ids').val(),\n                exclude_vendor_ids: $('.dokan_admin_coupons_vendors_exclude_ids').val(),\n                enable_all_vendor: $('#admin_coupons_enabled_for_vendor').is(\":checked\") ? 'yes' : 'no'\n              };\n            },\n            processResults: function processResults(data) {\n              var terms = [];\n\n              if (data) {\n                $.each(data, function (id, text) {\n                  terms.push({\n                    id: id,\n                    text: text\n                  });\n                });\n              }\n\n              return {\n                results: terms\n              };\n            },\n            cache: true\n          }\n        };\n        display_result(this, select2_args);\n      });\n    }) // WooCommerce Backbone Modal\n    .on('wc_backbone_modal_before_remove', function () {\n      $('.wc-enhanced-select, :input.wc-product-search, :input.wc-customer-search').filter('.select2-hidden-accessible').selectWoo('close');\n    }).trigger('wc-enhanced-select-init');\n    $('html').on('click', function (event) {\n      if (this === event.target) {\n        $('.wc-enhanced-select, :input.wc-product-search, :input.wc-customer-search').filter('.select2-hidden-accessible').selectWoo('close');\n      }\n    });\n  } catch (err) {\n    // If select2 failed (conflict?) log the error but don't stop other scripts breaking.\n    window.console.log(err);\n  }\n});\n\n//# sourceURL=webpack://dokan-pro/./assets/src/js/dokan-admin-coupon.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/src/js/dokan-admin-coupon.js"]();
/******/ 	
/******/ })()
;