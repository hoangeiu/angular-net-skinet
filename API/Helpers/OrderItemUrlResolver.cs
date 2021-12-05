using API.Dtos;
using AutoMapper;
using Core.Entities.OrderAggregate;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers
{
    public class OrderItemUrlResolver : IValueResolver<OrderItem, OrderItemDto, string>
    {
        private readonly IConfiguration _config;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public OrderItemUrlResolver(IConfiguration config, IHttpContextAccessor httpContextAccessor)
        {
            _config = config;
            _httpContextAccessor = httpContextAccessor;
        }

        public string Resolve(OrderItem source, OrderItemDto destination, string destMember, ResolutionContext context)
        {
            var currentSchema = _httpContextAccessor.HttpContext.Request.Scheme;
            var currentUrl = _httpContextAccessor.HttpContext.Request.Host.Value;

            if (!string.IsNullOrEmpty(source.ItemOrdered.PictureUrl))
            {
                //return _config["ApiUrl"] + source.ItemOrdered.PictureUrl;

                return currentSchema + "://" + currentUrl + _config["ImageUrl"] + source.ItemOrdered.PictureUrl;

            }

            return null;
        }
    }
}
